import React from 'react';
import { View, ScrollView } from 'react-native';
import { Category } from '../Category';

import { categories } from '../../utils/categories';
import { styles } from './styles';

type Props = {
  categorySelected: number;
  setCategory: (categoryId: number) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props){
  return(
    <ScrollView 
      horizontal
      style={styles.container} 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 25, paddingRight: 10 }}
    >
      {categories.map(category => (
        <Category
          key={category.id} 
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}