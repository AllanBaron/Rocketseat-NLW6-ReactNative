import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState(0);

  function handleCategorySelect(categoryId: number) {
    categoryId === category ? setCategory(0) : setCategory(categoryId);
  } 

  const appointments = [
    {
      id: 1,
      guild: {
        id: 1,
        name: "Lendários",
        icon: null,
        owner: true
      },
      category: 1,
      date: "25/06 às 18:30",
      description: "É hoje que vamos chegar ao challenger sem perder uma partida da MD10"
    }
  ]

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total: (6)" />
          <FlatList 
            data={appointments} 
            keyExtractor={item => item.id.toString()} 
            renderItem={({ item }) => (
              <Appointment data={item} />
            )}
          />
        </View>
      </View>
    </View>
  )
}