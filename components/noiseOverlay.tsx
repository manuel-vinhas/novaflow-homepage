import NoiseFilter from './noise';

const NoiseOverlay = () => (
  <>
    <NoiseFilter />
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Ensures the overlay doesn't block interactions
        zIndex: 9999, // Ensure it's on top of everything
        filter: 'url(#noise)', // Apply the SVG filter
        opacity: 0.5, // Adjust the opacity of the noise
      }}
    />
  </>
);

export default NoiseOverlay;