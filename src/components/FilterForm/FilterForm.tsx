import React, { FC, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { createArrayYears } from '../../utility';
import { useFetching } from '../../myCostumeHook';
import { genreService } from '../../services';
import { IForm, IGenres } from '../../interfaces';

import styles from './FilterForm.module.css';

interface IProps {
    children?: ReactNode
}

const FilterForm: FC<IProps> = () => {
    const { register, handleSubmit, reset } = useForm<IForm>();
    const { data } = useFetching<IGenres>(genreService.getAll);
    const navigate = useNavigate();
    const submit = async (data: IForm): Promise<void> => {
        navigate(`/filter/${data.with_genres}`, { state: data });
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
            <div className={styles.label}>
                <h5><span>Release year</span></h5>
                <select className={styles.select} {...register('primary_release_year')}>
                    <option defaultChecked={true} disabled={true}>
                        All years
                    </option>
                    {createArrayYears()
                        .reverse()
                        .map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                </select>
            </div>
            <div className={styles.label}>
                <h5><span>Vote average</span></h5>
                <div className={styles.average}>
                    <input type="number" min={1} max={10} defaultValue={1} className={styles.input} {...register('vote_average_gte')} />
                    <input type="number" min={1} max={10} defaultValue={10} className={styles.input} {...register('vote_average_lte')} />
                </div>
            </div>
            <div className={styles.label}>
                <h5><span>Sort by</span></h5>
                <select className={styles.select} {...register('sort_by')} defaultValue={'popularity.asc'}>
                    <option value="popularity.desc">Popularity</option>
                    <option value="vote_count.desc">Vote count</option>
                    <option value="vote_average.desc">Rating</option>
                </select>
            </div>
            <div className={styles.label}>
                <h5><span>Genres</span></h5>
                <select className={styles.select} {...register('with_genres')} defaultChecked={true} defaultValue={28}>
                    <option value={28} defaultChecked={true} disabled={true}>All genres</option>
                    {!!data?.genres.length &&
                        data.genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                </select>
            </div>
            <div>
                <button type="submit" className={styles.button}>Apply</button>
                <button type="button" className={styles.button} onClick={() => reset()}>Reset</button>
            </div>
        </form>
    );
};

export { FilterForm };
