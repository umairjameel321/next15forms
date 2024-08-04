"use server";

import prisma from "@/utils/client";
import { UserValidations } from "@/utils/UserValidations";

export const saveUser = async (
  prevState: { error: boolean; success: boolean },
  payload: { formData: FormData }
) => {
  const { formData } = payload;
  const fields = Object.fromEntries(formData) as Record<
    string,
    FormDataEntryValue
  >;
  console.log(fields);

  const validation = UserValidations.safeParse(fields);

  if (!validation.success) {
    // console.log(validation.error.flatten().fieldErrors);
    return {
      error: true,
      success: false,
      errorDetails: validation.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.user.create({
      data: validation.data,
    });
    return { error: false, success: true };
  } catch (error: any) {
    console.log(error);
    return { error: true, success: false, errorDetails: JSON.stringify(error) };
  }
};
