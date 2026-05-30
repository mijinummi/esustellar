import { useMemo, useState } from "react";

import {
  Transaction,
} from "../types/transaction";

export type FilterTab =
  | "all"
  | "contributions"
  | "payouts";

export function useTransactionFilters(
  transactions: Transaction[]
) {
  const [activeTab, setActiveTab] =
    useState<FilterTab>("all");

  const counts = useMemo(() => {
    const contributions =
      transactions.filter(
        (tx) => tx.type === "contribution"
      ).length;

    const payouts =
      transactions.filter(
        (tx) => tx.type === "payout"
      ).length;

    return {
      all: transactions.length,
      contributions,
      payouts,
    };
  }, [transactions]);

  const filteredTransactions =
    useMemo(() => {

      switch (activeTab) {
        case "contributions":
          return transactions.filter(
            (tx) =>
              tx.type === "contribution"
          );

        case "payouts":
          return transactions.filter(
            (tx) =>
              tx.type === "payout"
          );

        default:
          return transactions;
      }
    }, [activeTab, transactions]);

  return {
    activeTab,
    setActiveTab,
    counts,
    filteredTransactions,
  };
}