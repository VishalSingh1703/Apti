import React, { useState } from 'react';

const docs = [
    {
        text: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        options: ["120 metres", "180 metres", "324 metres", "150 metres"],
        answer: "Option D",
        explanation: "Speed = 60 \u00d7 5 m/sec = 50 m/sec. 18 3 Length of the train = (Speed \u00d7 Time). Length of the train = 50 \u00d7 9 m = 150 m."
    },
    {
        text: "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
        options: ["45 km/hr", "50 km/hr", "54 km/hr", "55 km/hr"],
        answer: "Option B",
        explanation: "Speed of the train relative to man = 125 m/sec 10 = 25 m/sec. 2 = 25 \u00d7 18 km/hr 2 5 = 45 km/hr. Let the speed of the train be \u00d7 km/hr. Then, relative speed = ( \u00d7 \u2212 5) km/hr. \u00d7 \u2212 5 = 45 \u00d7 = 50 km/hr."
    },
    {
        text: "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
        options: ["200 m", "225 m", "245 m", "250 m"],
        answer: "Option C",
        explanation: "Speed = 45 \u00d7 5 m/sec = 25 m/sec. 18 2 Time = 30 sec. Let the length of bridge be \u00d7 metres. Then, 130 + \u00d7 = 25 30 2 2(130 + \u00d7 ) = 750 \u00d7 = 245 m. Video E \u00d7 planation: https://youtu.be/M_d8WufJWKc"
    },
    {
        text: "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
        options: ["1 : 3", "3 : 2", "3 : 4", "None of these"],
        answer: "Option B",
        explanation: "Let the speeds of the two trains be \u00d7 m/sec and y m/sec respectively. Then, length of the first train = 27 \u00d7 metres, and length of the second train = 17y metres. 27 \u00d7 + 17y = 23 \u00d7 + y 27 \u00d7 + 17y = 23 \u00d7 + 23y 4 \u00d7 = 6y \u00d7 = 3 . y"
    },
    {
        text: "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
        options: ["120 m", "240 m", "300 m", "None of these"],
        answer: "Option B",
        explanation: "Speed = 54 \u00d7 5 m/sec = 15 m/sec. 18 Length of the train = (15 \u00d7 20)m = 300 m. Let the length of the platform be \u00d7 metres. Then, \u00d7 + 300 = 15 36 \u00d7 + 300 = 540 \u00d7 = 240 m."
    },
    {
        text: "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
        options: ["65 sec", "89 sec", "100 sec", "150 sec"],
        answer: "Option B",
        explanation: "Speed = 240 m/sec = 10 m/sec. 24 Required time = 240 + 650 sec = 89 sec."
    },
    {
        text: "Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:",
        options: ["50 m", "72 m", "80 m", "82 m"],
        answer: "Option A",
        explanation: "Let the length of each train be \u00d7 metres. Then, distance covered = 2 \u00d7 metres. Relative speed = (46 \u2212 36) km/hr = 10 \u00d7 5 m/sec 18 = 25 m/sec 9 2 \u00d7 = 25 36 9 2 \u00d7 = 100 \u00d7 = 50."
    },
    {
        text: "A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?",
        options: ["40 sec", "42 sec", "45 sec", "48 sec"],
        answer: "Option A",
        explanation: "Formula for converting from km/hr to m/s: X km/hr = X \u00d7 5 m/s. 18 Therefore, Speed = 45 \u00d7 5 m/sec = 25 m/sec. 18 2 Total distance to be covered = (360 + 140) m = 500 m. Formula for finding Time = Distance Speed Required time = 500 \u00d7 2 sec = 40 sec."
    },
    {
        text: "Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:",
        options: ["36", "45", "48", "49"],
        answer: "Option C",
        explanation: "Relative speed = (60 + 90) km/hr = 150 \u00d7 5 m/sec 18 = 125 m/sec. 3 Distance covered = (1.10 + 0.9) km = 2 km = 2000 m. Required time = 2000 \u00d7 3 sec = 48 sec."
    },
    {
        text: "A jogger running at 9 kmph alongside a railway track in 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?",
        options: ["3.6 sec", "18 sec", "36 sec", "72 sec"],
        answer: "Option C",
        explanation: "Speed of train relative to jogger = (45 \u2212 9) km/hr = 36 km/hr. = 36 \u00d7 5 m/sec 18 = 10 m/sec. Distance to be covered = (240 + 120) m = 360 m. Time taken = 360 sec = 36 sec."
    },
    {
        text: "A 270 metres long train running at the speed of 120 kmph crosses another train running in opposite direction at the speed of 80 kmph in 9 seconds. What is the length of the other train?",
        options: ["230 m", "240 m", "260 m", "320 m"],
        answer: "Option A",
        explanation: "Relative speed = (120 + 80) km/hr = 200 \u00d7 5 m/sec 18 = 500 m/sec. 9 Let the length of the other train be \u00d7 metres. Then, \u00d7 + 270 = 500 9 9 \u00d7 + 270 = 500 \u00d7 = 230."
    },
    {
        text: "A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?",
        options: ["230 m", "240 m", "260 m", "270 m"],
        answer: "Option D",
        explanation: "Speed = 72 \u00d7 5 m/sec = 20 m/sec. 18 Time = 26 sec. Let the length of the train be \u00d7 metres. Then, \u00d7 + 250 = 20 26 \u00d7 + 250 = 520 \u00d7 = 270."
    },
    {
        text: "Two trains, each 100 m long, moving in opposite directions, cross each other in 8 seconds. If one is moving twice as fast the other, then the speed of the faster train is:",
        options: ["30 km/hr", "45 km/hr", "60 km/hr", "75 km/hr"],
        answer: "Option C",
        explanation: "Let the speed of the slower train be \u00d7 m/sec. Then, speed of the faster train = 2 \u00d7 m/sec. Relative speed = ( \u00d7 + 2 \u00d7 ) m/sec = 3 \u00d7 m/sec. (100 + 100) = 3 \u00d7 8 24 \u00d7 = 200 \u00d7 = 25 . 3 So, speed of the faster train = 50 m/sec 3 = 50 \u00d7 18 km/hr 3 5 = 60 km/hr."
    },
    {
        text: "Two trains 140 m and 160 m long run at the speed of 60 km/hr and 40 km/hr respectively in opposite directions on parallel tracks. The time (in seconds) which they take to cross each other, is:",
        options: ["9", "9.6", "10", "10.8"],
        answer: "Option D",
        explanation: "Relative speed = (60 + 40) km/hr = 100 \u00d7 5 m/sec = 250 m/sec. 18 9 Distance covered in crossing each other = (140 + 160) m = 300 m. Required time = 300 \u00d7 9 sec = 54 sec = 10.8 sec. 250"
    },
    {
        text: "A train 110 metres long is running with a speed of 60 kmph. In what time will it pass a man who is running at 6 kmph in the direction opposite to that in which the train is going?",
        options: ["5 sec", "6 sec", "7 sec", "10 sec"],
        answer: "Option B",
        explanation: "Speed of train relative to man = (60 + 6) km/hr = 66 km/hr. = 66 \u00d7 5 m/sec 18 = 55 m/sec. 3 Time taken to pass the man = 110 \u00d7 3 sec = 6 sec."
    },
    {
        text: "A train travelling at a speed of 75 mph enters a tunnel 3 miles long. The train is  mile long. How long does it take for the train to pass through the tunnel from the moment the front enters to the moment the rear emerges?",
        options: ["2.5 min", "3 min", "3.2 min", "3.5 min"],
        answer: "Option B",
        explanation: "Total distance covered = 7 + 1 miles 2 4 = 15 miles. 4 Time taken = 15 hrs 4 \u00d7 75 = 1 hrs 20 = 1 \u00d7 60 min. 20 = 3 min."
    },
    {
        text: "A train 800 metres long is running at a speed of 78 km/hr. If it crosses a tunnel in 1 minute, then the length of the tunnel (in meters) is:",
        options: ["130", "360", "500", "540"],
        answer: "Option C",
        explanation: "Speed = 78 \u00d7 5 m/sec = 65 m/sec. 18 3 Time = 1 minute = 60 seconds. Let the length of the tunnel be \u00d7 metres. Then, 800 + \u00d7 = 65 60 3 3(800 + \u00d7 ) = 3900 \u00d7 = 500."
    },
    {
        text: "A 300 metre long train crosses a platform in 39 seconds while it crosses a signal pole in 18 seconds. What is the length of the platform?",
        options: ["320 m", "350 m", "650 m", "Data inadequate"],
        answer: "Option B",
        explanation: "Speed = 300 m/sec = 50 m/sec. 18 3 Let the length of the platform be \u00d7 metres. Then, \u00d7 + 300 = 50 39 3 3( \u00d7 + 300) = 1950 \u00d7 = 350 m."
    },
    {
        text: "A train speeds past a pole in 15 seconds and a platform 100 m long in 25 seconds. Its length is:",
        options: ["50 m", "150 m", "200 m", "Data inadequate"],
        answer: "Option B",
        explanation: "Let the length of the train be \u00d7 metres and its speed by y m/sec. Then, \u00d7 = 15 y = \u00d7 . y 15 \u00d7 + 100 = \u00d7 25 15 15( \u00d7 + 100) = 25 \u00d7 15 \u00d7 + 1500 = 25 \u00d7 1500 = 10 \u00d7 \u00d7 = 150 m."
    },
    {
        text: "A train moves past a telegraph post and a bridge 264 m long in 8 seconds and 20 seconds respectively. What is the speed of the train?",
        options: ["69.5 km/hr", "70 km/hr", "79 km/hr", "79.2 km/hr"],
        answer: "Option D",
        explanation: "Let the length of the train be \u00d7 metres and its speed by y m/sec. Then, \u00d7 = 8 \u00d7 = 8y y Now, \u00d7 + 264 = y 20 8y + 264 = 20y y = 22. Speed = 22 m/sec = 22 \u00d7 18 km/hr = 79.2 km/hr."
    },
    {
        text: "How many seconds will a 500 metre long train take to cross a man walking with a speed of 3 km/hr in the direction of the moving train if the speed of the train is 63 km/hr?",
        options: ["25", "30", "40", "45"],
        answer: "Option B",
        explanation: "Speed of the train relative to man = (63 \u2212 3) km/hr = 60 km/hr = 60 \u00d7 5 m/sec 18 = 50 m/sec. 3 Time taken to pass the man = 500 \u00d7 3 sec 50 = 30 sec."
    },
    {
        text: "Two goods train each 500 m long, are running in opposite directions on parallel tracks. Their speeds are 45 km/hr and 30 km/hr respectively. Find the time taken by the slower train to pass the driver of the faster one.",
        options: ["12 sec", "24 sec", "48 sec", "60 sec"],
        answer: "Option B",
        explanation: "Relative speed = = (45 + 30) km/hr = 75 \u00d7 5 m/sec 18 = 125 m/sec. 6 We have to find the time taken by the slower train to pass the DRIVER of the faster train and not the complete train. So, distance covered = Length of the slower train. Therefore, Distance covered = 500 m. Required time = 500 \u00d7 6 = 24 sec."
    },
    {
        text: "Two trains are running in opposite directions with the same speed. If the length of each train is 120 metres and they cross each other in 12 seconds, then the speed of each train (in km/hr) is:",
        options: ["10", "18", "36", "72"],
        answer: "Option C",
        explanation: "Let the speed of each train be \u00d7 m/sec. Then, relative speed of the two trains = 2 \u00d7 m/sec. So, 2 \u00d7 = (120 + 120) 12 2 \u00d7 = 20 \u00d7 = 10. Speed of each train = 10 m/sec = 10 \u00d7 18 km/hr = 36 km/hr."
    },
    {
        text: "Two trains of equal lengths take 10 seconds and 15 seconds respectively to cross a telegraph post. If the length of each train be 120 metres, in what time (in seconds) will they cross each other travelling in opposite direction?",
        options: ["10", "12", "15", "20"],
        answer: "Option B",
        explanation: "Speed of the first train = 120 m/sec = 12 m/sec. 10 Speed of the second train = 120 m/sec = 8 m/sec. 15 Relative speed = (12 + 8) = 20 m/sec. Required time = (120 + 120) sec = 12 sec."
    },
    {
        text: "A train 108 m long moving at a speed of 50 km/hr crosses a train 112 m long coming from opposite direction in 6 seconds. The speed of the second train is:",
        options: ["48 km/hr", "54 km/hr", "66 km/hr", "82 km/hr"],
        answer: "Option D",
        explanation: "Let the speed of the second train be \u00d7 km/hr. Relative speed = ( \u00d7 + 50) km/hr = ( \u00d7 + 50) \u00d7 5 m/sec 18 = 250 + 5 \u00d7 m/sec. 18 Distance covered = (108 + 112) = 220 m. 220 = 6 250 + 5 \u00d7 18 250 + 5 \u00d7 = 660 \u00d7 = 82 km/hr."
    },
    {
        text: "Two trains are running at 40 km/hr and 20 km/hr respectively in the same direction. Fast train completely passes a man sitting in the slower train in 5 seconds. What is the length of the fast train?",
        options: ["23 m", "(23*2)/9 m", "(27\n7)/9 m", "29 m"],
        answer: "Option C",
        explanation: "Relative speed = (40 \u2212 20) km/hr = 20 \u00d7 5 m/sec = 50 m/sec. 18 9 Length of faster train = 50 \u00d7 5 m = 250 m = 27 7 m. 9 9"
    },
    {
        text: "A train overtakes two persons who are walking in the same direction in which the train is going, at the rate of 2 kmph and 4 kmph and passes them completely in 9 and 10 seconds respectively. The length of the train is:",
        options: ["45 m", "50 m", "54 m", "72 m"],
        answer: "Option B",
        explanation: "2 kmph = 2 \u00d7 5 m/sec = 5 m/sec. 18 9 4 kmph = 4 \u00d7 5 m/sec = 10 m/sec. 18 9 Let the length of the train be \u00d7 metres and its speed by y m/sec. Then, \u00d7 = 9 and \u00d7 = 10. y \u2212 5 9 y \u2212 10 9 9y \u2212 5 = \u00d7 and 10(9y \u2212 10) = 9 \u00d7 9y \u2212 \u00d7 = 5 and 90y \u2212 9 \u00d7 = 100. On solving, we get: \u00d7 = 50. Length of the train is 50 m."
    },
    {
        text: "A train overtakes two persons walking along a railway track. The first one walks at 4.5 km/hr. The other one walks at 5.4 km/hr. The train needs 8.4 and 8.5 seconds respectively to overtake them. What is the speed of the train if both the persons are walking in the same direction as the train?",
        options: ["66 km/hr", "72 km/hr", "78 km/hr", "81 km/hr"],
        answer: "Option D",
        explanation: "4.5 km/hr = 4.5 \u00d7 5 m/sec = 5 m/sec = 1.25 m/sec, and 18 4 5.4 km/hr = 5.4 \u00d7 5 m/sec = 3 m/sec = 1.5 m/sec. 18 2 Let the speed of the train be \u00d7 m/sec. Then, ( \u00d7 \u2212 1.25) \u00d7 8.4 = ( \u00d7 \u2212 1.5) \u00d7 8.5 8.4 \u00d7 \u2212 10.5 = 8.5 \u00d7 \u2212 12.75 0.1 \u00d7 = 2.25 \u00d7 = 22.5 Speed of the train = 22.5 \u00d7 18 km/hr = 81 km/hr."
    },
    {
        text: "A train travelling at 48 kmph completely crosses another train having half its length and travelling in opposite direction at 42 kmph, in 12 seconds. It also passes a railway platform in 45 seconds. The length of the platform is",
        options: ["400 m", "450 m", "560 m", "600 m"],
        answer: "Option A",
        explanation: "Let the length of the first train be \u00d7 metres. Then, the length of the second train is \u00d7 metres. 2 Relative speed = (48 + 42) kmph = 90 \u00d7 5 m/sec = 25 m/sec. 18 [ \u00d7 + ( \u00d7 /2)] = 12 or 3 \u00d7 = 300 or \u00d7 = 200. 25 2 Length of first train = 200 m. Let the length of platform be y metres. Speed of the first train = 48 \u00d7 5 m/sec = 40 m/sec. 18 3 (200 + y) \u00d7 3 = 45 40 600 + 3y = 1800 y = 400 m."
    },
    {
        text: "Two stations A and B are 110 km apart on a straight line. One train starts from A at 7 a.m. and travels towards B at 20 kmph. Another train starts from B at 8 a.m. and travels towards A at a speed of 25 kmph. At what time will they meet?",
        options: ["9 a.m.", "10 a.m.", "10.30 a.m.", "11 a.m."],
        answer: "Option B",
        explanation: "Suppose they meet \u00d7 hours after 7 a.m. Distance covered by A in \u00d7 hours = 20 \u00d7 km. Distance covered by B in ( \u00d7 \u2212 1) hours = 25( \u00d7 \u2212 1) km. 20 \u00d7 + 25( \u00d7 \u2212 1) = 110 45 \u00d7 = 135 \u00d7 = 3. So, they meet at 10 a.m."
    },
    {
        text: "Two, trains, one from Howrah to Patna and the other from Patna to Howrah, start simultaneously. After they meet, the trains reach their destinations after 9 hours and 16 hours respectively. The ratio of their speeds is:",
        options: ["2 : 3", "4 : 3", "6 : 7", "9 : 16"],
        answer: "Option B",
        explanation: "Let us name the trains as A and B. Then, (A's speed) : (B's speed) = b : a = 16 : 9 = 4 : 3."
    }
]

export default docs;