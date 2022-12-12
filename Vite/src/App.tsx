import React, { useState } from "react";
import OptionsMatrix from "options-matrix/dist/esm";
import {
  Security,
  Maturity,
  ContextData,
  StrategyLeg,
  UpdatePriceFn,
  LogFlag
} from "options-matrix/dist/types";
import {
  context_data,
  market_data_ggal,
  options_cepu_202210,
  options_ggal_202210,
  underlyings,
} from "./optionsMock";
import './App.css';
import { ThemeEnum } from "./optionMatrix.types";


const App: React.FC<{}> = () => {
  async function obtainUnderlyningList() {
    return new Promise<Security[]>((resolve) =>
      setTimeout(() => resolve(underlyings), 500)
    );
  }

  async function obtainSecuritiesList(
    underlying: Security,
    maturityMonthYear: Maturity,
    updatePriceFn: UpdatePriceFn
  ) {
    updateRandomPrice(updatePriceFn);
    return new Promise<Security[]>((resolve) => {
      if (underlying.id === "bm_MERV_GGAL_48hs") {
        return resolve(options_ggal_202210);
      } else {
        return resolve(options_cepu_202210);
      }
    });
  }

  function updateRandomPrice(callback: UpdatePriceFn) {
    setInterval(function () {
      const randomPrice = Math.floor(Math.random() * 100 + 1);
      const marketData = { ...market_data_ggal, lastPrice: randomPrice };
      callback(marketData);
    }, 10500);
  }

  function obtainContextData(underlying: Security) {
    if (underlying.id === "bm_MERV_GGAL_48hs") {
      return new Promise<ContextData>((resolve) =>
        setTimeout(() => resolve(context_data), 500)
      );
    }
    return new Promise<ContextData>((resolve) =>
      setTimeout(() => resolve(context_data), 500)
    );
  }

  const handleStrategySelect = (
    strategy: StrategyLeg[],
    updatePriceFn: UpdatePriceFn
  ) => undefined;

  return (
    <div className="container">
      <OptionsMatrix
        underlyingListSelector={obtainUnderlyningList}
        optionsSelector={obtainSecuritiesList}
        contextDataSelector={obtainContextData}
        onStrategySelected={handleStrategySelect}
        currentDate='2022-06-07T03:00:00.000Z'
        logFlags={[LogFlag.GRAPH]}
        theme={ThemeEnum.LIGHT}
      />
    </div>
  );
};

export default App;
