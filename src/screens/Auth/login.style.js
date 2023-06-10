import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // marginVertical: "10%",
    // paddingVertical: "30%",
    height: "100%",
    paddingHorizontal: "10%",
    paddingVertical: "10%",
    backgroundColor: "#fff",
    // fontFamily: "Nunito",
  },
  mainHeader: {
    fontSize: 25,
    color: "#119744",
    fontWeight: 900,
    paddingTop: 20,
    textAlign: "center",
    marginVertical: "20%",
    // fontFamily: "regular",
  },
  formInput: {
    marginTop: 15,
    marginBottom: 15,
  },
  textInput: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 6,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    // transition
    // border: "1px solid #e8e8e8",
  },
  inputFocus: {
    borderColor: "#119744",
  },
  inutError: {
    borderColor: "#c54837",
  },
  buttonStyle: {
    marginTop: 15,
    marginBottom: 15,
    marginVertical: 5,
    backgroundColor: "#119744",
    padding: 15,
    borderRadius: 6,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  bottomText: {
    textAlign: "center",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#e8e8e8",
    position: "relative",
    marginVertical: 50,
  },
  or: {
    position: "absolute",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    top: -20,
    zIndex: 3,
    backgroundColor: "#fff",
    padding: 10,
    left: "45%",
    borderRadius: 20,
  },
  anotherSignin: {},
  googleSignin: {
    backgroundColor: "#e60023",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  disabled: {
    backgroundColor: "#dedede",
  },
});
export default styles;
