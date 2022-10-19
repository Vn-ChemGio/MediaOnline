import React           from "react";
import { parse }       from "react-native-redash";
import { scaleLinear } from "d3-scale";
import * as shape      from "d3-shape";

import { Devices } from "~commons";
import data        from "./data.json";

interface Amount {
    amount: string;
    currency: string;
    scale: string;
}

interface PercentChange {
    hour: number;
    day: number;
    week: number;
    month: number;
    year: number;
}

interface LatestPrice {
    amount: Amount;
    timestamp: string;
    percent_change: PercentChange;
}

type PriceList = [ string, number ][];

interface DataPoints {
    percent_change: number;
    prices: PriceList;
}

interface Prices {
    latest: string;
    latest_price: LatestPrice;
    hour: DataPoints;
    day: DataPoints;
    week: DataPoints;
    month: DataPoints;
    year: DataPoints;
    all: DataPoints;
}

export { data };
export type GraphIndex = 0 | 1 | 2 | 3 | 4;
export const SIZE = Devices.width;

const POINTS = 60;
const values = data.data.prices as Prices;

const buildGraph = ( dataPoints: DataPoints, label: string ) => {
    const priceList       = dataPoints.prices.slice( 0, POINTS );
    const formattedValues = priceList.map(
        ( price ) => [ parseFloat( price[ 0 ] ), price[ 1 ] ] as [ number, number ]
    );
    const prices          = formattedValues.map( ( value ) => value[ 0 ] );
    const dates           = formattedValues.map( ( value ) => value[ 1 ] );
    const scaleX          = scaleLinear()
        .domain( [ Math.min( ...dates ), Math.max( ...dates ) ] )
        .range( [ 0, SIZE ] );
    const minPrice        = Math.min( ...prices );
    const maxPrice        = Math.max( ...prices );
    const scaleY          = scaleLinear().domain( [ minPrice, maxPrice ] ).range( [ SIZE, 0 ] );
    return {
        label,
        minPrice,
        maxPrice,
        percentChange: dataPoints.percent_change,
        path:          parse(
            shape
                .line()
                .x( ( [ , x ] ) => scaleX( x ) as number )
                .y( ( [ y ] ) => scaleY( y ) as number )
                .curve( shape.curveBasis )( formattedValues ) as string
        ),
    };
};

export const graphs = [
    {
        label: "1H",
        value: 0,
        data:  buildGraph( values.hour, "Last Hour" ),
    },
    {
        label: "1D",
        value: 1,
        data:  buildGraph( values.day, "Today" ),
    },
    {
        label: "1M",
        value: 2,
        data:  buildGraph( values.month, "Last Month" ),
    },
    {
        label: "1Y",
        value: 3,
        data:  buildGraph( values.year, "This Year" ),
    },
    {
        label: "all",
        value: 4,
        data:  buildGraph( values.all, "All time" ),
    },
] as const;
