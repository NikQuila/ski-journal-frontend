import { Text, Input } from "@rneui/base";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { ScrollView, View, TextInput } from "react-native";
// Components
import SkiCenterCard from "../../components/SkiCenterCard";
import { PickerFormInput } from "../../components/PickerInput";
// Data
import SKI_CENTERS_DATA from "../../assets/data/skiCentersData";
// Icons
import { Ionicons } from "@expo/vector-icons";

const courses = [
  {
    label: "All",
  },
  {
    label: "Trentino",
  },
  {
    label: "Piamonte",
  },
  {
    label: "Veneto",
  },
];

const SkiCentersScreen = () => {
  // State
  const [courseSelected, setCourseSelected] = useState(0);
  const [skiCentersFiltered, setSkiCentersFiltered] =
    useState(SKI_CENTERS_DATA);
  // handleFilterFunc
  const handleFilter = (e) => {
    setCourseSelected(e);
    if (e !== 0) {
      const result = SKI_CENTERS_DATA.filter((item) => {
        return item.region.toLowerCase() === courses[e].label.toLowerCase();
      });

      setSkiCentersFiltered(result);
    } else setSkiCentersFiltered(SKI_CENTERS_DATA);
  };

  return (
    <ScrollView>
      <PickerFormInput
        selected={courseSelected}
        fn={handleFilter}
        items={courses}
        label="Seleccionar Región"
      />
      {/* <Input
        placeholder="Select Region"
        leftIcon={<Ionicons name="search-outline" />}
        onChangeText={regionHandleFilter}
      /> */}

      {/* <Input
        placeholder="Select Location"
        leftIcon={<Ionicons name="search-outline" />}
      /> */}
      {skiCentersFiltered.map((item) => (
        <SkiCenterCard
          title={item.name}
          imageUrl={item.imageUrl}
          description={item.description}
          id={item.id}
          key={item.id}
        />
      ))}
    </ScrollView>
  );
};

export default SkiCentersScreen;
