var config = {
    style: 'mapbox://styles/firefly224/cjju2w8g83nm02rlhc335r2q2',
    accessToken: 'pk.eyJ1IjoiZmlyZWZseTIyNCIsImEiOiJjamp1MXkzYWMwMHdmM3ZwODcwYnNxOWF5In0.LCYf6x7U4Tspi8nlgSYVGg',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '1973',
            alignment: '',
            title: '1973 ROCKEFELLER\'S DRUG LAWS',
            image: 'images/drugwar.jpg',
            description: 'Prisons were widely viewed as ineffective means of controlling deviant behavior. On January 3rd, 1973, Nelson Rockefeller, governor of New York, gave a state address demanding that every illegal drug dealer be punished with a mandatory prison life sentence without parole.',
            location: {
                center: [22.25, -3],
                zoom: 4.7,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'food',                 opacity: 0 },
                {layer: 'satellite',            opacity: 1},
                {layer: 'greenspace',           opacity: 0},
                {layer: 'building',             opacity: 0 },
                {layer: 'averageIncome',        opacity: 0},
                {layer: 'populationDensity',    opacity: 0}, 
                {layer: 'prisonBoundaries',     opacity: 0},
                {layer: 'prisonCentroids',      opacity: 1},
                {layer: 'youth',                opacity: 0},
                {layer: 'cultural',             opacity: 0},
                {layer: 'publicSafety',         opacity: 0}
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: '1984',
            alignment: 'center',
            title: '1984 CUOMO\'S PRISON CONSTRUCTION',
            image: 'images/cuomo_construction.jpg',
            description: 'Over the next twelve years Mario Cuomo added more prison beds in New York than all the previous governors in the state\'s history combined. Their total cost, including interest, would eventually reach about $7 billion.',
            location: {
                center: [22.25, -14],
                zoom: 4.7,
                pitch: 0,
                bearing:0
            },
            onChapterEnter: [
                {layer: 'food',                 opacity: 0},
                {layer: 'satellite',            opacity: .4},
                {layer: 'road',                 opacity: .2},
                {layer: 'greenspace',           opacity: 1},
                {layer: 'building',             opacity: 0 },
                {layer: 'averageIncome',        opacity: 0},
                {layer: 'populationDensity',    opacity: 0}, 
                {layer: 'prisonBoundaries',     opacity: 1},
                {layer: 'prisonCentroids',      opacity: 1},
                {layer: 'youth',                opacity: 0},
                {layer: 'cultural',             opacity: 0},
                {layer: 'publicSafety',         opacity: 0}
            ],
            onChapterExit: [
               
            ]
        },
        {
            id: '1994',
            alignment: 'center',
            title: '1994 NYC\'S BROKEN WINDOW POLICY',
            image: 'images/broken_window_policy.jpg',
            description: 'The New York City Police Department implemented a “zero tolerance” policy for surveilling petty crimes in 1990. This decade saw a significant decrease in crime rates, which was largely attributed to the focus of policing on maintaining community order and safety.',
            location: {
                center: [22.25, -24],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .2},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 0},
                {layer: 'populationDensity', opacity: 0}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 1},
                {layer: 'youth',opacity: 0},
                {layer: 'cultural', opacity: 0},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'food', opacity: 0}

            ]
        },
        {
            id: '2004',
            alignment: 'center',
            title: '2004 DRUG LAW REFORMS',
            image: 'images/drug_law_reform.jpg',
            description: 'Judge Janet DiFiore ties the prison downturn both to drug law reforms - in 2004, 2005, and 2009 - and a recognition within law enforcement that alternatives like drug treatment were needed.',
            location: {
                center: [22.25, -34],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .2},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 0},
                {layer: 'populationDensity', opacity: 0}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 0},
                {layer: 'youth',opacity: 1},
                {layer: 'cultural', opacity: 0},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'youth',opacity:0 }

            ]
        },
        {
            id: '2011',
            alignment: 'center',
            title: '2011 CUOMO\'S PRISON CLOSURE',
            image: 'images/cuomo_closure.jpg',
            description: '“We are locking up fewer people. But then you need fewer facilities. And the shrinkage of that system is going to be something that has to be thought through and managed,” Cuomo said.',
            location: {
                center: [22.25, -41],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .2},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 0},
                {layer: 'populationDensity', opacity: 0}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 0},
                {layer: 'youth',opacity: 0},
                {layer: 'cultural', opacity: 1},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'cultural', opacity: 0}

            ]
        },
        {
            id: '2021',
            alignment: 'center',
            title: '2021 HOCHUL\'s PRISON CLOSURE',
            image: 'images/Hochul.jpg',
            description: '"I want to get creative with this," she said. "I don\'t know if something can be used as a substance abuse treatment center. We don\'t need as many prisons. The number of people incarcerated has gone down dramatically in our state."',
            location: {
                center: [22.25, -51],
                zoom: 4.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'satellite',opacity: .4},
                {layer: 'road',opacity: .2},
                {layer: 'greenspace', opacity: 0},
                {layer: 'building', opacity: 0 },
                {layer: 'averageIncome', opacity: 0},
                {layer: 'populationDensity', opacity: 1}, 
                {layer: 'prisonBoundaries', opacity: 1},
                {layer: 'prisonCentroids', opacity: 1},
                {layer: 'food', opacity: 0},
                {layer: 'youth',opacity: 0},
                {layer: 'cultural', opacity: 0},
                {layer: 'publicSafety', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'populationDensity', opacity: 0}

            ]
        },
        
    ]
};
