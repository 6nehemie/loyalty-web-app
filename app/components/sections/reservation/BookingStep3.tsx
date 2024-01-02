import { Input } from '../../ui/input';
import { Label } from '../../ui/label';

const BookingStep3 = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="driverLicence">Permis de conduire *</Label>
        <Input id="driverLicence" type="file" className="" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="homeJustificatif">
          Justificatif de domicil (moins de 3 mois) *
        </Label>
        <Input id="homeJustificatif" type="file" className="" />
      </div>
    </div>
  );
};
export default BookingStep3;
