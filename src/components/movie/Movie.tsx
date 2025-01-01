import { Star, ThumbsUp } from 'lucide-react'
import { Movie } from '../../util/movies'
import Tag from './Tag'

interface MovieProps {
    data: Movie
}

export default function MovieComponent({ data }: MovieProps) {
    return (
        <div className='flex items-start gap-4 h-fit'>
            <img
                src={data.Poster}
                className='rounded'
                draggable={false}
                alt={`Capa do filme "${data.Title}"`}
                style={{
                    height: `192px`,
                    maxHeight: `192px`,
                }}
            />
            <div className='flex flex-col justify-between h-[192px] w-full'>
                <div>
                    <div>
                        <h4 className='text-xl font-bold'>
                            {data.Title} ({data.Year})
                        </h4>
                        <p>{data.Plot}</p>
                    </div>
                    <div className='flex gap-1 items-center mt-2'>
                        {data.Genre.split(', ').map((x) => (
                            <Tag genre={x} key={x} />
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-between dark:text-zinc-300 text-zinc-600'>
                    <div className='text-sm flex gap-4 p-2'>
                        <div className='flex gap-1 items-center'>
                            <Star size={16} />
                            <span>{data.imdbRating}</span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <ThumbsUp size={16} />
                            <span>{data.imdbVotes}</span>
                        </div>
                    </div>
                    <span className='text-xs'>{data.Country}</span>
                </div>
            </div>
        </div>
    )
}
