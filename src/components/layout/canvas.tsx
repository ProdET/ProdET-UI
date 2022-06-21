import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import useStore from '@/hooks/store';
import { ReactNode, useEffect, useRef } from 'react';
import { Perf } from 'r3f-perf';

interface CanvasLayoutProps {
  children: ReactNode;
}

const LControl = () => {
  const dom = useStore((state) => state.dom);
  const control = useRef(null);

  useEffect(() => {
    if (control.current) {
      const domElement = dom.current;
      const originalTouchAction = domElement.style['touch-action'];
      domElement.style['touch-action'] = 'none';

      return () => {
        domElement.style['touch-action'] = originalTouchAction;
      };
    }
  }, [dom, control]);
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} />;
};
const CanvasLayout = ({ children }: CanvasLayoutProps) => {
  const dom = useStore((state) => state.dom);

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <LControl />
      <Preload all />
      {children}
      <Perf position={'bottom-left'} />
    </Canvas>
  );
};

export default CanvasLayout;
