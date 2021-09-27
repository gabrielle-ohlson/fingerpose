import {
	Finger,
	FingerCurl,
	FingerDirection
} from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe shrug gesture 🤷
const shrugDescription = new GestureDescription('shrug');

//all fingers horizontal
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	shrugDescription.addCurl(finger, FingerCurl.NoCurl, 1.0);
	shrugDescription.addCurl(finger, FingerCurl.addCurl, 0.1);
	shrugDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
	shrugDescription.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
	shrugDescription.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.6);
	shrugDescription.addDirection(finger, FingerDirection.DiagonalUpRight, 0.6);
}

// give additional weight to thumb and pinky fingers
shrugDescription.setWeight(Finger.Thumb, 2);
shrugDescription.setWeight(Finger.Pinky, 2);

export default shrugDescription;

/*
TO CHANGE:
	- index.html: `const knownGestures`, `const gestureStrings`, `const gestureBackgrounds`
	- index.js: `import`, `export`

then run `npm run build`
*/