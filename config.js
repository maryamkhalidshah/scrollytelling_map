var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoibWFyeWFta2hhbGlkc2hhaCIsImEiOiJja3Y5eHJ4em40d29uMzJwNnN1dGI2YXFpIn0.yFla5czhWErjwSdPEZ98yQ',
    showMarkers: true,  
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Places I\'ve Lived In',
    subtitle: '',
    byline: 'By Maryam Khalid Shah',
    footer: '',
    chapters: [
        {
            id: 'risalpur',
            alignment: 'left',
            hidden: false,
            title: 'Risalpur, Pakistan',
            image: '',
            description: 'Lived here from 1995-1996.',
            location: {
                center: { lon: 71.98523, lat: 34.06435 },
                zoom: 15.00,
                pitch: 60.00,
                bearing: -26.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'place-risalpur',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'place-risalpur',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Taif',
            alignment: 'right',
            hidden: false,
            title: 'Taif, Saudia Arabia',
            image: 'https://drive.google.com/uc?id=1-xa6cwzyZtpOiqAg0MUSewAUPpBBV8KE',
            description: 'Lived in Taif from 1996-1999 and have my earliest memories from here.',
            location: {
                center: [40.42858, 21.36618],
                zoom: 7.06,
                pitch: 24.67,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Kharian',
            alignment: 'right',
            hidden: false,
            title: 'Kharian, Pakistan',
            image: 'https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/01/Cover-24-01-1.jpg',
            description: 'Lived in Kharian from 2000 to 2002. Started school over here.',
            location: {
                center: [73.85846, 32.83919],
                zoom: 8.95,
                pitch: 48.50,
                bearing: -6.43
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Rahim Yar Khan',
            alignment: 'right',
            hidden: false,
            title: 'Rahim Yar Khan, Pakistan',
            image: '',
            description: 'Shifted to Rahim Yar Khan in 2002. Was right next to the desert and would get pretty hot in the summers (up to 50 degrees Celsius/122 degrees Fahrenheit).',
            location: {
                center: [70.23058516843284, 28.454475080440574],
                zoom: 16.61,
                pitch: 0.00,
                bearing: -52.83
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Islamabad',
            alignment: 'left',
            hidden: false,
            title: 'Islamabad, Pakistan',
            image: 'https://www.bruker.com/en/services/support/india-middleeast-africa/pakistan-islamabad/_jcr_content/teaserImage.coreimg.jpeg/1603432531558/pakistan---islamabad.jpeg',
            description: 'Moved to the capital city of Pakistan in 2004. This was the last time I had to change schools.',
            location: {
                center: [73.00998, 33.69779],
                zoom: 12.67,
                pitch: 60.00,
                bearing: 24.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Thal',
            alignment: 'right',
            hidden: false,
            title: 'Thal, Pakistan',
            image: 'https://drive.google.com/uc?id=1La6ocv4AEqxCKYDZ3ggqGLqW_dpGrFE2',
            description: 'Moved to a tribal town close to the Pak-Afghan border in 2006. Experienced two rocket attacks here.',
            location: {
                center: [70.56017, 33.36069],
                zoom: 16.00,
                pitch: 60.00,
                bearing: 3.15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Islamabad1',
            alignment: 'right',
            hidden: false,
            title: 'Islamabad, Pakistan',
            image: '',
            description: 'Moved back to Islamabad in 2007 without my parents and rejoined my school. Went on to stay here for the next 7 years, but changed houses a lot...',
            location: {
                center: [73.07099, 33.72317],
                zoom: 10.55,
                pitch: 40.50,
                bearing: 2.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Islamabad2',
            alignment: 'right',
            hidden: false,
            title: 'House 1 - Islamabad, Pakistan',
            image: '',
            description: 'Stayed at my maternal grandparent\'s house from 2007 to 2008.',
            location: {
                center: [73.07801627949156, 33.666676001001825],
                zoom: 16.32,
                pitch: 0.50,
                bearing: -80.62
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Islamabad3',
            alignment: 'right',
            hidden: false,
            title: 'House 2 - Islamabad, Pakistan',
            image: '',
            description: 'Moved in with my parents when they came back from Thal in 2008. Stayed together for the next 3 years.',
            location: {
                center: [73.02460, 33.71763],
                zoom: 15.82,
                pitch: 0.50,
                bearing: -114.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Islamabad4',
            alignment: 'right',
            hidden: false,
            title: 'House 3 - Islamabad, Pakistan',
            image: '',
            description: 'Moved in with my paternal grandfather in 2011 when my parents moved to Peshawar. Stayed here for a year. Completed my O\'levels (11th grade).',
            location: {
                center: [73.00809, 33.69918],
                zoom: 16.48,
                pitch: 0.00,
                bearing: -13.42
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Islamabad5',
            alignment: 'right',
            hidden: false,
            title: 'House 4 - Islamabad, Pakistan',
            image: '',
            description: 'Moved in with my maternal grandparents again in 2012. Stayed here for 2 years. Completed my A\'levels (13th grade).',
            location: {
                center: [73.07801627949156, 33.666676001001825],
                zoom: 16.32,
                pitch: 0.50,
                bearing: -80.62
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Lahore',
            alignment: 'right',
            hidden: false,
            title: 'Lahore, Pakistan',
            image: 'https://lums.edu.pk/sites/default/files/styles/default_image_news/public/2021-10/Slider%20VC%20%20Meeting2_2.jpg',
            description: 'Moved to Lahore in 2014 for my undergrad at LUMS. Stayed here for 4 years - would go to Karachi during summer breaks to visit my parents.',
            location: {
                center: [74.41189, 31.46975],
                zoom: 16.00,
                pitch: 41.50,
                bearing: -23.02
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Islamabad6',
            alignment: 'left',
            hidden: false,
            title: 'Islamabad, Pakistan',
            image: 'https://drive.google.com/uc?id=1I7EMiZvH_ruot6x9sQvQyoz6DePZYzB2',
            description: 'Moved back to Islamabad in 2018. Parents moved in 2020 - got to be in the same house together after almost 10 years! We were lucky to be living right next to the hills and would go on hikes every day.',
            location: {
                center: [72.99715, 33.70652],
                zoom: 13.57,
                pitch: 58.00,
                bearing: -7.81
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Karachi',
            alignment: 'right',
            hidden: false,
            title: 'Karachi, Pakistan',
            image: 'https://www.spotlight-online.de/sites/spotlight.spotlight-verlag.de/files/styles/mode_content/public/2018-04/shutterstock_688669768_online.jpg?itok=J7kKwMWW',
            description: 'Moved to Karachi in January 2021 after getting married. Started my second semester at Georgetown.',
            location: {
                center: [67.11067, 24.87585],
                zoom: 9.91,
                pitch: 60.00,
                bearing: -28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'DC',
            alignment: 'right',
            hidden: false,
            title: 'Washington D.C., United States',
            image: '',
            description: 'Traveled to DC in July 2021. Finally got to see the campus and attend in-person classes!',
            location: {
                center: [-77.07445, 38.92277],
                zoom: 16.37,
                pitch: 60.00,
                bearing: -78.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
