import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import AnimatedTabIndicator
  from "./AnimatedTabIndicator";

import {
  FilterTab,
} from "../../hooks/useTransactionFilters";

type Props = {
  activeTab: FilterTab;

  counts: {
    all: number;
    contributions: number;
    payouts: number;
  };

  onChange: (
    tab: FilterTab
  ) => void;
};

const tabs: FilterTab[] = [
  "all",
  "contributions",
  "payouts",
];

export default function TransactionFilterTabs({
  activeTab,
  counts,
  onChange,
}: Props) {

  const activeIndex =
    tabs.indexOf(activeTab);

  return (
    <View className="mb-4">

      <View
        className="
          flex-row
          border-b
          border-neutral-200
          relative
        "
      >
        {tabs.map((tab) => {

          const label =
            tab === "all"
              ? `All (${counts.all})`
              : tab === "contributions"
              ? `Contributions (${counts.contributions})`
              : `Payouts (${counts.payouts})`;

          const active =
            activeTab === tab;

          return (
            <TouchableOpacity
              key={tab}
              onPress={() =>
                onChange(tab)
              }
              className="
                flex-1
                py-4
                items-center
              "
            >
              <Text
                className={
                  active
                    ? "font-semibold text-blue-600"
                    : "text-neutral-500"
                }
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}

        <AnimatedTabIndicator
          index={activeIndex}
        />
      </View>

    </View>
  );
}