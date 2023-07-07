import { useState, useEffect } from "react";
import { Button, Card } from "@rneui/base";
import { Text } from "@rneui/themed";
import {
  ScrollView,
  View,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from "react-native";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectIsReload } from "../../store/user/user.selector";
import { setIsReload } from "../../store/user/user.action";
// Components
import FriendFeedCard from "../../components/FriendFeedCard";
import DialogFormDaily from "../../components/DialogFormDaily";
import ButtonToForm from "../../components/ButtonToForm";
// Firebase
import {
  getAllJournals,
  getAllJournalsPhotosFB,
  signOutUser,
  getProfilePicUrl,
  getAllProfilePicFB,
} from "../../firebase/firebase.utils";
import { getDownloadURL } from "firebase/storage";
import colors from "../../utils/colors";
import NotificationsHandler from "../../notifications";

const FriendsFeedScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [allJournalsCompletes, setAllJournalsCompletes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const isReload = useSelector(selectIsReload);
  console.log("is Reload", isReload);

  const compareFunctionByDate = (a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  };
  const fetchData = async () => {
    setAllJournalsCompletes([]);
    const allJournalsBeforeSort = [];
    // setIsLoading(true);
    console.log("aqui");
    const allJournals = await getAllJournals();
    const allDailyPhotos = await getAllJournalsPhotosFB();
    const allProfilesPic = await getAllProfilePicFB();

    await new Promise((resolve, reject) => {
      let count = 0;
      allJournals.forEach(async (journal) => {
        const busqueda = allDailyPhotos.find(
          (element) => element.name === journal.photoId
        );
        const result = await getDownloadURL(busqueda);
        if (journal.uid) {
          // const busquedaProfilePic = await getProfilePicUrl(journal.uid);
          // journal.profilePicUrl = busquedaProfilePic;
          const busquedaProfilePic = allProfilesPic.find(
            (element) => element.name === journal.uid
          );
          const result2 = await getDownloadURL(busquedaProfilePic);
          journal.profilePicUrl = result2;
        }
        journal.imageUrl = result;
        allJournalsBeforeSort.push(journal);
        count += 1;
        if (count === allJournals.length) {
          resolve();
        }
      });
    });

    setAllJournalsCompletes(allJournalsBeforeSort.sort(compareFunctionByDate));
    console.log(allJournalsBeforeSort.sort(compareFunctionByDate));
    setIsLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    if (isReload === true) {
      // const focusHandler = navigation.addListener("focus", () => {
      fetchData().then((result) => {
        dispatch(setIsReload(false));
      });
    }
  }, [isReload]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          style={styles.spinner}
          size={80}
          color={colors.appColor}
        />
      ) : (
        <>
          <ScrollView
            style={{ marginTop: 10 }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  setIsLoading(true);
                  fetchData();
                }}
              />
            }
          >
            {/* <Button title={"Log out"} onPress={signOutUser} /> */}
            {/* <NotificationsHandler /> */}
            {allJournalsCompletes.map((cardProps) => (
              <View
                key={cardProps.journalId}
                style={{ marginBottom: 10, alignItems: "center" }}
              >
                <FriendFeedCard width={280} cardProps={cardProps} />
              </View>
            ))}
          </ScrollView>
          <ButtonToForm />
        </>
      )}
    </>
  );
};

export default FriendsFeedScreen;

const styles = StyleSheet.create({
  spinner: {
    position: "absolute",
    top: "40%",
    left: "38%",
  },
});
