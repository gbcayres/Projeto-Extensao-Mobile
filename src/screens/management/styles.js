import { StyleSheet } from "react-native";

import { theme } from "../../theme";

const styles = StyleSheet.create({
    balanceContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    inicialBalance: {
        fontSize: 18,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
        fontStyle: "italic",
    },
    currentBalance: {
        fontSize: 24,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium,
        textAlign: "center",
    },
    currentBalanceValue: {
        fontSize: 28,
        color: theme.colors.cyan,
        fontFamily: theme.fontFamily.bold,
    },
    historyTitle: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.white,
    },
})

export default styles;