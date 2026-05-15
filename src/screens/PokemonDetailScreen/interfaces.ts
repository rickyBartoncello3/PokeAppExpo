import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Routes} from '@/src/navigation/routes';

export interface PokemonDetailProps extends NativeStackScreenProps<
  RootStackParamList,
  typeof Routes.PokemonDetail
> {}
