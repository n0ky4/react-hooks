import moviesData from './../assets/movies-250.json'

// export interface Root {
//     date: string
//     movies: Movie[]
// }

export interface Movie {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Poster: string
    Ratings: Rating[]
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
    Response: string
}

export interface Rating {
    Source: string
    Value: string
}

const fastSort = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0)
function getMovies() {
    return moviesData.movies.sort((a, b) => fastSort(a.Title, b.Title))
}
const movies = getMovies()

const counter = {
    memo: 0,
    normal: 0,
}

const SLICE = 5
export function filterMovies(query: string, type: 'memo' | 'normal') {
    counter[type]++
    console.log(
        `%c[${type}]%c ${counter[type]}`,
        `background:${type === 'memo' ? '#ccc' : '#333'};padding:1px;border-radius:2px;color:${
            type === 'memo' ? '#333' : '#ccc'
        };font-weight:bold`,
        ''
    )

    // não filtrar, já que não usamos o resultado
    if (type === 'normal') return

    if (!query)
        return {
            results: [],
            more: 0,
        }

    const q = query.toLocaleLowerCase()
    const results = movies.filter(
        (x) => x.Title.toLowerCase().startsWith(q) || x.Title.toLowerCase().includes(q)
    )

    const more = results.length - SLICE

    return {
        results: results.slice(0, SLICE),
        more: more > 0 ? more : 0,
    }
}
