import {
  renderHook,
} from "@testing-library/react-hooks";

import {
  useTransactionFilters,
} from "../useTransactionFilters";

describe(
  "useTransactionFilters",
  () => {

    it(
      "filters contributions",
      () => {

        const txs = [
          {
            id: "1",
            type: "contribution",
          },
          {
            id: "2",
            type: "payout",
          },
        ];

        const {
          result,
        } = renderHook(() =>
          useTransactionFilters(
            txs as any
          )
        );

        result.current.setActiveTab(
          "contributions"
        );

        expect(
          result.current.counts
            .contributions
        ).toBe(1);
      }
    );
  }
);