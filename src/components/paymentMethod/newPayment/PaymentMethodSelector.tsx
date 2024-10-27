import { PaymentType } from "@/src/store/cart/cartSlice";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Button from "../../ui/Button";
const { height, width } = Dimensions.get("screen");
interface PaymentMethodSelectorProps {
  setPaymentMethod: (method: PaymentType | null) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  setPaymentMethod,
}) => {
  return (
    <View
      style={{
        width: width * 0.8,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",

      }}
    >
      {[PaymentType.Visa, PaymentType.SuperVisa, PaymentType.PayPal].map(
        (method) => (
          <TouchableOpacity
            key={method}
            style={styles.button}
            onPress={() => setPaymentMethod(method)}
          >
            <Button
              color="red"
              size="large"
              title={method}
              onClick={() => {
                setPaymentMethod(method);
              }}
            />
          </TouchableOpacity>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "400",
    color: "#333",
  },
  button: {
    borderRadius: 5,
    padding: 12,
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    zIndex: 0,
  },
});

export default PaymentMethodSelector;
