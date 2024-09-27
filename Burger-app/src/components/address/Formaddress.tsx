import {
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  View,
} from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import {
  addressSchema,
  addressSchemaType,
} from "@/src/types/validations/address";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createAddress } from "@/src/mutations/user/createAddress";
import FormInput from "./FormIput";
import Button from "../ui/Button";

type Props = {
  setOpen: any;
  open: boolean;
};

const { width } = Dimensions.get("window");

function FormAddress({ setOpen, open }: Props) {
  // const [isOpenModal, setIsOpenModal] = React.useState(false);
  
  // const toggleModal = () => {
  //   setIsOpenModal(true);
  // };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<addressSchemaType>({
    defaultValues: {
      country: "",
      city: "",
      state: "",
      street: "",
      zip_code: "",
    },
    resolver: zodResolver(addressSchema),
  });

  const mutation = useMutation({
    mutationKey: ["new-address"],
    mutationFn: createAddress,
    onSuccess: () => {
      reset();
      ToastAndroid.show("Successfully added address", ToastAndroid.LONG);
    },
  });

  const data: addressSchemaType = {
    street: control._getWatch("street"),
    zip_code: control._getWatch("zip_code"),
    state: control._getWatch("state"),
    city: control._getWatch("city"),
    country: control._getWatch("country"),
  };

  const onSubmit = () => {
    mutation.mutate(data);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <Modal
          onDismiss={setOpen}
          presentationStyle="overFullScreen"
          transparent
          visible={open}
          animationType="slide"
        >
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              <View style={styles.IputStyle}>
                <FormInput
                  control={control}
                  name="street"
                  placeholder="Enter street"
                  text="Street"
                />
              </View>
              <View style={styles.IputStyle}>
                <FormInput
                  control={control}
                  name="zip_code"
                  placeholder="Enter zip code"
                  text="Zip Code"
                />
              </View>
              <View style={styles.IputStyle}>
                <FormInput
                  control={control}
                  name="state"
                  placeholder="Choose state"
                  text="State"
                />
              </View>
              <View style={styles.IputStyle}>
                <FormInput
                  control={control}
                  name="city"
                  placeholder="Enter city"
                  text="City"
                />
              </View>
              <View style={styles.IputStyle}>
                <FormInput
                  control={control}
                  name="country"
                  placeholder="Choose country"
                  text="Country"
                />
              </View>
              <View style={styles.buttonStyle}>
                <Button
                  color="red"
                  size="small"
                  title="Close"
                  onClick={setOpen}
                />
                <Button
                  color="red"
                  size="small"
                  title="Create"
                  onClick={handleSubmit(onSubmit)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default FormAddress;

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalView: {
    position: "absolute",
    display: "flex",
    top: "30%",
    left: "50%",
    height: 480,
    width: width * 0.8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
    backgroundColor: "#fff",
    borderRadius: 7,
    padding: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonStyle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-around",
    paddingRight: 7,
    marginTop: 5,
  },
  IputStyle: { height: 70, width: "100%" },
});