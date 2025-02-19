import { BaseProps } from '../../piConstant'

// import ReactApexChart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";
import { generateChartTemplate } from './chart.generator';
export class PiChartProps extends BaseProps {
  text?: string
  series?:Number[]
  categories?: string[];
//   name: string = 'radioField'
//   helpText?: string
//   isDisabled?: boolean
//   isChecked?: boolean
//   onChange?: (e: React.ChangeEvent) => void
//   value?: string
//   size?: 'small' | 'medium' | 'large' = 'small'
//   className?: string
}

/**
 *
 * @param props this component takes PiChartProps as input
 * @returns  returns input component based on library type
 */
export default function PiChart(props: PiChartProps) {
  const newprops = new PiChartProps()
  return generateChartTemplate({ ...newprops, ...props })
}
