const NoiseFilter = () => (
    <svg className="w-full h-full absolute " style={{ display: 'block' }}>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.35"
          numOctaves="3"
          seed="9"
          stitchTiles="stitch"
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 1 0"
        />
      </filter>
    </svg>
  );
  
  export default NoiseFilter;