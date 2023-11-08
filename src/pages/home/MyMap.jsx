import { Map, Marker, ZoomControl } from "pigeon-maps"


const MyMap = () => {
  return (
    <div className="mt-20 h-[300px] md:h-[500px]">
      <Map
        defaultCenter={[23.8041, 90.4152]}
        defaultZoom={11}
      >
        <ZoomControl />

        <Marker width={50} anchor={[23.8041, 90.4152]} color="#643843" />
      </Map>
    </div>
  )
};
export default MyMap;