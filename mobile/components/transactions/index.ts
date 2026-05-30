import React from "react";

import {
  FlatList,
  View,
} from "react-native";

import TransactionFilterTabs
  from "../../components/transactions/TransactionFilterTabs";

import {
  useTransactionFilters,
} from "../../hooks/useTransactionFilters";

export default function TransactionsScreen() {

  const transactions =
    useTransactions();

  const {
    activeTab,
    setActiveTab,
    counts,
    filteredTransactions,
  } = useTransactionFilters(
    transactions
  );

  return (
    <View className="flex-1 bg-white">

      <TransactionFilterTabs
        activeTab={activeTab}
        counts={counts}
        onChange={setActiveTab}
      />

      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={({ item }) => (
          <TransactionRow
            transaction={item}
          />
        )}
      />
    </View>
  );
}