import { z } from 'zod';

// Todo. Create your own zod validation here. Below i show a simple validation that only receive one item from the frontend. 

const userValidationSchema = z.object({
  pasword: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(),
});

// You can read my following blog to get deeper understanding about creating different types of zod validation https://dev.to/md_enayeturrahman_2560e3/how-to-create-api-in-an-industry-standard-app-44ck

export const UserValidation = {
  userValidationSchema,
};