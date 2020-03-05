import { Hospital } from 'HospitalModels';

export async function loadHospitals():Promise<Hospital[]> {
    const res = await fetch('https://api-int.icloudhospital.com/api/v1/hospitals');
    const res_1 = await res.json();
    return res_1.items;
}