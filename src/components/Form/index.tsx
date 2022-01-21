import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './Form.module.css';

const schema = yup.object().shape({
    username: yup.string().required('Username should not be empty'),
    email: yup.string().email().required(),
    age: yup
        .number()
        .typeError('Age must be a number')
        .min(13, 'Minimum age is 13')
        .integer('Age must be a whole number')
        .required('Age is required field'),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'Password must be min 8 characters and contain min one uppercase and one number'
        )
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required(),
});

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.form_title}>Form</h2>
            <form
                className={styles.form_wrapper}
                onSubmit={handleSubmit(() => console.log('submited'))}
            >
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Username"
                    {...register('username')}
                />
                <small className={styles.error_message}>
                    {errors.username?.message}
                </small>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                />
                <small className={styles.error_message}>
                    {errors.email?.message}
                </small>
                <input
                    type="number"
                    placeholder="Age"
                    {...register('age')}
                    className={styles.input}
                />
                <small className={styles.error_message}>
                    {errors.age?.message}
                </small>
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                />
                <small className={styles.error_message}>
                    {errors.password?.message}
                </small>
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Confirm password"
                    {...register('confirmPassword')}
                />

                {errors.confirmPassword && (
                    <small className={styles.error_message}>
                        Passwords should match
                    </small>
                )}

                <button type="submit" className={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
