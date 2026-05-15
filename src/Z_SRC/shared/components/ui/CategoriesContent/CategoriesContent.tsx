import React, {use} from 'react';
import {FlatList, View} from 'react-native';
import styles from './CategoriesContent.styles';
import {CategoriesContentProps} from './interfaces';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import Text from '@/src/components/Text/Text';
import {CategoryCard} from '@/src/Z_SRC/shared/components/ui/CatergoryCard/CategoryCard';

export const CategoriesContent = ({
  title,
  categories,
  onCategoryPress,
}: CategoriesContentProps) => {
  const {colors} = use(ThemeContext);

  return (
    <View style={styles.content}>
      <Text size={16} weight={700} style={{color: colors.text}}>
        {title}
      </Text>

      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        numColumns={2}
        columnWrapperStyle={styles.categoryRow}
        contentContainerStyle={styles.categoryList}
        renderItem={({item}) => (
          <CategoryCard category={item} onCategoryPress={onCategoryPress} />
        )}
      />
    </View>
  );
};
