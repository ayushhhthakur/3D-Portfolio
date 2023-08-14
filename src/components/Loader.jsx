import {Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-lod"></span>
      <p 
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          maeginTop: 40
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader