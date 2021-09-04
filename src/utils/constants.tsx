export const CARDS: ICard[] = [
    {
        title: 'Basic',
        header: {
            annually: ' $199.99',
            monthly: ' $19.99'
        },
        options: ['500 GB Storage',
            '2 Users Allowed',
            'Send up to 3 GB'],
        button: 'Learn More',
        main: false,
    },
    {
        title: 'Proffessional',
        header: {
            monthly: '  $24.99', annually: ' $249.99'
        },
        options: [

            '1 TB Storage',
            '5 Users Allowed',
            'Send up to 10 GB'
        ],
        button: 'Learn More',
        main: true,

    },
    {
        title: 'Master',
        header: {
            monthly: '$39.99',
            annually: '$399.99'
        },
        options: [

            '2 TB Storage',
            '10 Users Allowed',
            'Send up to 20 GB'
        ],
        button: 'Learn More',
        main: false,

    }
]

type ICard = {
    title: string;
    header: {
        annually: string;
        monthly: string;
    }
    options: string[];
    button: string;
    main: boolean,
}