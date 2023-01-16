import { Button, Card } from "@rneui/base";
import { Text } from "@rneui/themed";
import { ScrollView, View } from "react-native";
// Components
import FriendFeedCard from "../../components/FriendFeedCard";
import DialogFormDaily from "../../components/DialogFormDaily";

const cardFeedData = [
  {
    name: "Enric Parellada",
    discipline: "GS",
    runs: 6,
    place: "Carezza",
    snowConidtions: "ICY",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm74LoHUPFboIOMdUFDO9H9HUKiU1t97CU6QSxtTZAFj86y2rne12QdqwFn3gzyOfwNNg&usqp=CAU",
  },
  {
    name: "Nicolás Pirozzi",
    discipline: "GS",
    runs: 8,
    place: "Pozza di Fassa",
    snowConidtions: "Icy",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aEdU-K91gTtEZi_KTEtLJYA6stkSdyCQyKlDRg87LKgkirYX5RidAoZA3z0e0uIw-dA&usqp=CAU",
  },
  {
    name: "Kay Holscher",
    discipline: "SL",
    runs: 4,
    place: "Buffaure",
    snowConidtions: "Soft",
    imageUrl:
      "https://i.ytimg.com/vi/LFga0pZGlOU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGF4gWChlMA8=&rs=AOn4CLApPs7_J7ATl8t22ObXWKu-AYARoQ",
  },
];

const FriendsFeedScreen = () => {
  return (
    <>
      <ScrollView>
        {cardFeedData.map((cardProps) => (
          <View
            key={cardProps.name}
            style={{ marginBottom: 10, alignItems: "center" }}
          >
            <FriendFeedCard width={280} cardProps={cardProps} />
          </View>
        ))}
      </ScrollView>

      <DialogFormDaily title={"+"} />
    </>
  );
};

export default FriendsFeedScreen;
