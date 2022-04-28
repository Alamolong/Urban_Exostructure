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
            alignment: 'center',
            title: '1973 Rockefeller\'s Drug Laws',
            image: 'images/drugwar.jpg',
            description: 'Prisons were widely viewed as ineffective means of controlling deviant behavior. On January 3rd, 1973, Nelson Rockefeller, governor of New York, gave a state address demanding that every illegal drug dealer be punished with a mandatory prison life sentence without parole.',
            location: {
                center: [22.25, -3],
                zoom: 4.4,
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
            id: '1973 quote',
            alignment: 'left',
            title: '',
            image: 'images/1973-b.jpg',
            description: '“We need Communities Not Cages: to decarcerate state prisons, to reduce the power of prosecutors to coerce pleas and dictate sentences, and to address the harms of the sentencing laws passed in the 1970s and 1990s that have created the current crisis of mass incarceration.” (Marvin Mayfield, Director of Organizing at Center Community Alternatives)',
            location: {
                center: [22.25, -3],
                zoom: 4.4,
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
            title: '1984 Cuomo\'s Prison Construction',
            image: 'images/cuomo_construction.jpg',
            description: 'From 1984-1996, Mario Cuomo added more prison beds in New York than all the previous governors in the state\'s history combined. Their total cost, including interest, would eventually reach about $7 billion.',
            location: {
                center: [22.25, -14],
                zoom: 4.4,
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
            id: '1984 quote',
            alignment: 'right',
            title: '',
            image: 'images/UE_Background diagram_r.jpg',
            description: '“We\'ll build us a prison! That will bring construction jobs, prison jobs and food-service jobs. A prison will save our community.”(Sheryl McCarthy, 2005)',
            location: {
                center: [22.25, -14],
                zoom: 4.4,
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
            title: '1994 NYC\'s Broken window policy',
            image: 'images/broken_window_policy.jpg',
            description: 'The New York City Police Department implemented a “zero tolerance” policy for surveilling petty crimes in 1990. This decade saw a significant decrease in crime rates, which was largely attributed to the focus of policing on maintaining community order and safety.',
            location: {
                center: [22.25, -24],
                zoom: 4.4,
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
            id: '1994 quote',
            alignment: 'right',
            title: '',
            image: 'images/UE_Background diagram2_r.jpg',
            description: '“Mayor Rudolph Giuliani and his first police commissioner William J. Bratton (1994-1996) followed the prescriptions of the broken windows theory and ordered the police to go after disorderly people because of their behavior, if unchecked, represented a gateway to serious crime” (Themis Chronopoulos, 2017)',
            location: {
                center: [22.25, -24],
                zoom: 4.4,
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
            id: '2004',
            alignment: 'center',
            title: '2004 Drug Law reforms',
            image: 'images/drug_law_reform.jpg',
            description: 'Judge Janet DiFiore ties the prison downturn both to drug law reforms - in 2004, 2005, and 2009 - and a recognition within law enforcement that alternatives like drug treatment were needed.',
            location: {
                center: [22.25, -34],
                zoom: 4.4,
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
            id: '2004 quote',
            alignment: 'left',
            title: '',
            image: '',
            description: '“I will die in prison for marijuana unless I receive executive clemency,” (Pedro Moreno, 62 years and serving a life sentence for distributing weed imported from Mexico) ',
            location: {
                center: [22.25, -34],
                zoom: 4.4,
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
            title: '2011 Cuomo\'s prison closure ',
            image: 'images/cuomo_closure.jpg',
            description: '“We are locking up fewer people. But then you need fewer facilities. And the shrinkage of that system is going to be something that has to be thought through and managed,” Cuomo said.',
            location: {
                center: [22.25, -41],
                zoom: 4.4,
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
            id: '2011 quote 1',
            alignment: 'right',
            title: '',
            image: 'images/UE_Background diagram3_r.jpg',
            description: '“Unions as well as communities across the state, particularly those in the economically hard-pressed upstate areas that rely on prisons for jobs, protested loudly as the Cuomo administration mulled over which prisons would get the ax.”(Zach Bergson, Gotham Gazette)',
            location: {
                center: [22.25, -41],
                zoom: 4.4,
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
            id: '2011 quote 2',
            alignment: 'left',
            title: '',
            image: 'images/2011-b.jpg',
            description: '“Nearly 75% are Black or Brown. As intended, these laws exacerbated the mass criminalization and mass incarceration of Black and Brown New Yorkers.” (Isabel Song Beer, amny.com)',
            location: {
                center: [22.25, -41],
                zoom: 4.4,
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
            title: '2021 Hochul\'s prison closure',
            image: 'images/Hochul.jpg',
            description: '"I want to get creative with this," she said. "I don\'t know if something can be used as a substance abuse treatment center. We don\'t need as many prisons. The number of people incarcerated has gone down dramatically in our state." ',
            location: {
                center: [22.25, -51],
                zoom: 4.4,
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
        {
            id: '2021 quote 1',
            alignment: 'right',
            title: '',
            image: 'images/UE_Background diagram4_r.jpg',
            description: '“Closing prisons is an idea that might appeal to liberal voters in a primary, but it’s of no benefit to upstate communities and represents yet another step backward on public safety.”',
            location: {
                center: [22.25, -51],
                zoom: 4.4,
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
            id: '2021 quote 2',
            alignment: 'left',
            title: '',
            image: 'images/UE_Background diagram5_b.jpg',
            description: '“...people like my husband who are incarcerated with indeterminate sentences can only earn a 6-month credit off their sentence no matter how many programs, degrees of achievements they accomplish while in prison… This means that as hard as they work to grow and change, they are doing so without any incentive from the system itself.” (Kerry Gant, Center for Community Alternatives\' community leader)',
            location: {
                center: [22.25, -51],
                zoom: 4.4,
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
            id: 'end statement',
            alignment: 'center',
            title: '',
            image: '',
            description: 'In New York City, 70 prisons were built between 1973 and 2004. With 26 prisons closed and closing since 2011, and more being planned, can we now say that New York State  is in an era of decarceration?',
            location: {
                center: [22.25, -51],
                zoom: 4.4,
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
    ]
};
