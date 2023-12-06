import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
    fee: 0.03,
    containerStyle: {
        border: '1px solid rgb(234, 234, 234)',
        borderRadius: '16px',
    },
    integrator: 'the-rollup'
};

export const WidgetPage = () => {
  return (
    <LiFiWidget integrator="the-rollup" config={widgetConfig} />
  );
};