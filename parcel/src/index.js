// import { Vector3 } from 'three'; // inherits the whole of threejs library
// import { Vector3 } from './three.module'; // inherits the whole of threejs library
import { Vector3 } from 'three/src/math/vector3'; // works but its annoying having to memorise the location of each file

console.log('Parcel', new Vector3(1, 2, 3));
