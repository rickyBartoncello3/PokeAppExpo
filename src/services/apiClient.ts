import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  isAxiosError,
  Method,
  create,
} from 'axios';

const JSON_MIME_TYPE = 'application/json';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type RequestOptions = {
  method?: HttpMethod;
  params?: Record<string, string | number | boolean | object | undefined | null>;
  body?: unknown;
  headers?: Record<string, string>;
};

export type HttpClientError = {
  status?: number;
  url?: string;
  method?: HttpMethod;
  body?: unknown;
  message: string;
};

class HttpClient {
  private client: AxiosInstance;
  private idToken: string | null = null;

  constructor(baseUrl: string) {
    this.client = create({
      baseURL: baseUrl.replace(/\/$/, ''),
      timeout: 15000,
      headers: {
        Accept: JSON_MIME_TYPE,
      },
    });
  }

  setBaseUrl(baseUrl: string) {
    this.client.defaults.baseURL = baseUrl.replace(/\/$/, '');
  }

  setIdToken(token: string | null) {
    this.idToken = token;
  }

  private getAuthHeader() {
    if (!this.idToken) {
      return {};
    }

    return {
      Authorization: `Bearer ${this.idToken}`,
    };
  }

  private normalizeParams(params?: RequestOptions['params']) {
    if (!params) {
      return undefined;
    }

    return Object.entries(params).reduce<Record<string, string | number | boolean>>(
      (acc, [key, value]) => {
        if (value === undefined || value === null) {
          return acc;
        }

        acc[key] = value;
        return acc;
      },
      {},
    );
  }

  private normalizePath(path: string) {
    return path.startsWith('/') ? path : `/${path}`;
  }

  private normalizeError(error: unknown, method: HttpMethod): HttpClientError {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;

      return {
        status: axiosError.response?.status,
        url: axiosError.config?.url,
        method,
        body: axiosError.response?.data,
        message: axiosError.message,
      };
    }

    return {
      method,
      message: error instanceof Error ? error.message : 'Unknown HTTP error',
      body: error,
    };
  }

  private async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    const method = options.method ?? 'GET';
    const isFormData = options.body instanceof FormData;

    const config: AxiosRequestConfig = {
      url: this.normalizePath(path),
      method: method as Method,
      params: this.normalizeParams(options.params),
      data: options.body,
      headers: {
        ...this.getAuthHeader(),
        ...(!isFormData && options.body ? {'Content-Type': JSON_MIME_TYPE} : {}),
        ...options.headers,
      },
    };

    try {
      const response = await this.client.request<T>(config);

      return response.data;
    } catch (error) {
      throw this.normalizeError(error, method);
    }
  }

  get<T>(
    path: string,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'GET',
      params,
    });
  }

  post<T>(
    path: string,
    body?: unknown,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params' | 'body'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'POST',
      body,
      params,
    });
  }

  put<T>(
    path: string,
    body?: unknown,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params' | 'body'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'PUT',
      body,
      params,
    });
  }

  patch<T>(
    path: string,
    body?: unknown,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params' | 'body'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'PATCH',
      body,
      params,
    });
  }

  delete<T>(
    path: string,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'DELETE',
      params,
    });
  }
}

export const httpClient = new HttpClient(
  process.env.EXPO_PUBLIC_API_URL ?? 'https://api.example.com',
);
