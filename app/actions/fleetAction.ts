export const addCar = (formData: FormData) => {
  const brand = formData.get('brand');
  const model = formData.get('model');
  const year = formData.get('year');
  const price = formData.get('price');
  const wallpaper = formData.get('wallpaper');
  const carImage = formData.get('carImage');
  const minAge = formData.get('minAge');

  try {
    return { data: 'Data' };
  } catch (error) {
    return { error: error };
  }
};
