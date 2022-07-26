/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { argTypeMapMarkers } from '@phase2/outline-core';
import { MapType, GestureType } from './outline-google-map';

import './outline-google-map';
import './src/outline-map-marker';

const mapTypeOptions: MapType[] = ['roadmap', 'satellite', 'hybrid', 'terrain'];
const gestureOptions: GestureType[] = ['auto', 'cooperative', 'greedy', 'none'];

export default {
  title: 'Content/Map',
  component: 'outline-google-map',
  argTypes: {
    ...argTypeSlotContent,
    apiKey: {
      description: '**REQUIRED:** Sets the Google Maps api key.',
    },
    centerLatitude: {
      description:
        '**OPTIONAL Number:** Sets the starting map lattitude. FitToMarkers overrides.',
    },
    centerLongitude: {
      description:
        '**OPTIONAL Number:** Sets the starting map longitude. FitToMarkers overrides.',
    },
    zoom: {
      description:
        '**OPTIONAL Number:** Sets the starting map zoom level. FitToMarkers overrides on inital page load, adjusting in Storybook will override FitToMarkers.',
    },
    fitToMarkers: {
      description:
        '**Boolean**: Sets the starting map zoom level to show all markers. Overrides zoom and center.',
    },
    mapType: {
      description:
        '**OPTIONAL MapType** Sets the style of map ("roadmap", "satellite", "hybrid", "terrain").',
      options: mapTypeOptions,
      control: {
        type: 'select',
      },
    },
    gestureHandling: {
      description:
        '**GestureType** Sets how the map handles touch events ("auto", "cooperative", "greedy", "none").',
      options: gestureOptions,
      control: {
        type: 'select',
      },
    },
    disableDefaultUI: {
      description: '**Boolean**: Clears the map controls.',
    },
    zoomControl: {
      description:
        '**Boolean**: Individually adds zoom controls to map after disabling controls.',
    },
    mapTypeControl: {
      description:
        '**Boolean**: Individually adds map type controls to map after disabling controls.',
    },
    scaleControl: {
      description:
        '**Boolean**: Individually adds scale controls to map after disabling controls.',
    },
    streetViewControl: {
      description:
        '**Boolean**: Individually adds street view controls to map after disabling controls.',
    },
    rotateControl: {
      description:
        '**Boolean**: Individually adds rotation controls to map after disabling controls.',
    },
    fullScreenControl: {
      description:
        '**Boolean**: Individually adds full screen controls to map after disabling controls.',
    },
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: false,
      },
    },
    docs: {
      description: {
        component: `This component renders a Google Map.`,
      },
      source: {
        code: `
<outline-google-map
  api-key="{{ apiKey }}"
  map-type="{{ mapTypeId }}"
  center-latitude="{{ mapStartingLat }}"
  center-longitude="{{ mapStartingLong }}"
  fit-to-markers
  disable-ui
>
  <outline-map-marker
    slot="markers" 
    latitude="{{ locationLat }}" 
    longitude="{{ locationLong }}"
    icon="{{ pngUrlorOutlineSVG }}"
    iconFillColor="{{ htmlColororOutlineVar }}">
      {{ mapMarkerDefaultSlot }}
  </outline-map-marker>
</outline-google-map>
        `,
      },
    },
  },
};

const Template = ({
  apiKey,
  zoom,
  mapType,
  centerLatitude,
  centerLongitude,
  fitToMarkers,
  disableDefaultUI,
  zoomControl,
  mapTypeControl,
  scaleControl,
  streetViewControl,
  rotateControl,
  fullScreenControl,
  gestureHandling,
  defaultSlot,
}: any): TemplateResult => {
  zoom = zoom > 0 ? zoom : null;
  return html`
      <outline-google-map
        apiKey="${apiKey}"
        .zoom="${zoom}"
        mapType="${mapType}"
        centerLatitude="${ifDefined(centerLatitude)}"
        centerLongitude="${ifDefined(centerLongitude)}"
        gestureHandling="${gestureHandling}"
        ?fitToMarkers="${fitToMarkers}"
        ?disableDefaultUI="${disableDefaultUI}"
        ?zoomControl="${zoomControl}"
        ?mapTypeControl="${mapTypeControl}"
        ?scaleControl="${scaleControl}"
        ?streetViewControl="${streetViewControl}"
        ?rotateControl="${rotateControl}"
        ?fullScreenControl="${fullScreenControl}"
      >
      ${unsafeHTML(`${defaultSlot}`)}
      </outline-google-map>
    `};

export const StandardGoogleMap: any = Template.bind({});
StandardGoogleMap.args = {
  apiKey: 'AIzaSyCNAf5tDcraq83EdJXme6au4OMOhTf_xSU',
  zoom: 5,
  mapType: 'roadmap',
  centerLatitude: 43.150696434249717,
  centerLongitude: -98.70699513096156,
  fitToMarkers: false,
  disableDefaultUI: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullScreenControl: false,
  gestureHandling: 'auto',
  defaultSlot: `<outline-map-marker 
  slot="markers" 
  latitude="38.89618151192073" 
  longitude="-77.07068737680915"
  icon="--system--map-pin"
  iconFillColor="--blue-900"
  iconFillOpacity=0.8
  iconStrokeColor="--blue-100"
  iconStrokeWeight=2>
  <p>DC (HEADQUARTERS)</p>
  <p>1735 N. Lynn Street Suite 720, Arlington, VA 22209</p>
</outline-map-marker>

<outline-map-marker 
  slot="markers" 
  latitude="40.75416713980043" 
  longitude="-73.98865678080413"
  icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png">
  <p>NYC</p>
  <p>530 Seventh Avenue Unit #12, New York, NY 10018</p>
</outline-map-marker>

<outline-map-marker 
  slot="markers" 
  latitude="45.526921520099926" 
  longitude="-122.68197086090038"
  icon="https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/map-pin.svg">
  <p>PDX</p>
  <p>514 NW 11th Avenue Suite 203, Portland, OR 97209</p>
</outline-map-marker>
  `
}
