const tagColors = {
    Drama: {
        bg: '#6C3483',
        color: 'white', // Purple background, white text
    },
    Crime: {
        bg: '#1C2833',
        color: 'white', // Dark gray background, white text
    },
    Action: {
        bg: '#E74C3C',
        color: 'white', // Bright red background, white text
    },
    Biography: {
        bg: '#2874A6',
        color: 'white', // Blue background, white text
    },
    History: {
        bg: '#D5D8DC',
        color: 'black', // Light gray background, black text
    },
    Adventure: {
        bg: '#28B463',
        color: 'white', // Green background, white text
    },
    Western: {
        bg: '#A04000',
        color: 'white', // Brown background, white text
    },
    Romance: {
        bg: '#FF69B4',
        color: 'black', // Pink background, black text
    },
    'Sci-Fi': {
        bg: '#5DADE2',
        color: 'black', // Light blue background, black text
    },
    Fantasy: {
        bg: '#8E44AD',
        color: 'white', // Purple background, white text
    },
    Mystery: {
        bg: '#34495E',
        color: 'white', // Dark blue background, white text
    },
    Family: {
        bg: '#F1C40F',
        color: 'black', // Bright yellow background, black text
    },
    Thriller: {
        bg: '#2E4053',
        color: 'white', // Deep blue-gray background, white text
    },
    War: {
        bg: '#7D3C98',
        color: 'white', // Deep purple background, white text
    },
    Comedy: {
        bg: '#F4D03F',
        color: 'black', // Bright yellow background, black text
    },
    Animation: {
        bg: '#FF7F50',
        color: 'black', // Coral background, black text
    },
    Horror: {
        bg: '#8B0000',
        color: 'white', // Dark red background, white text
    },
    Music: {
        bg: '#85C1E9',
        color: 'black', // Soft blue background, black text
    },
    'Film-Noir': {
        bg: '#1C1C1C',
        color: 'white', // Black background, white text
    },
    Musical: {
        bg: '#FF1493',
        color: 'white', // Bright pink background, white text
    },
    Sport: {
        bg: '#2ECC71',
        color: 'black', // Green background, black text
    },
} as const

export default function Tag({ genre }: { genre: string }) {
    if (!(genre in tagColors)) return null
    const { bg, color } = tagColors[genre as keyof typeof tagColors]

    return (
        <div
            className='text-xs p-1 rounded leading-none flex items-center justify-center select-none pointer-events-none'
            style={{
                backgroundColor: bg || 'gray',
                color: color || 'white',
            }}
        >
            {genre}
        </div>
    )
}
