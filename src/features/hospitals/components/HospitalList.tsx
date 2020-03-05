import { Hospital } from 'HospitalModels';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'services';
import { loadHospitalsAsync } from '../actions';
import { getHospitals } from '../selectors';


const mapStateToProps = (state: RootState) => ({
  isLoading: state.hospitals.isLoadingHospitals,
  hospitals: getHospitals(state.hospitals)
});

const dispatchProps = {
  loadHospitals: loadHospitalsAsync.request
};

type ServerRes = {
  items: Hospital[],
  metaData: {}
}
type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

// const hospitalSchema: schema.Entity<Hospital> = new schema.Entity('hospitals');
// const hospitalsSchema = new schema.Array(hospitalSchema);

const HospitalList = ({ hospitals, isLoading, loadHospitals }: Props) => {
  useEffect(() => {
    loadHospitals();
  }, [loadHospitals]);

  // const [hospitals_, updateHospitals] = useState([] as Hospital[]);

  // useEffect(() => {
  //   (async () => {
  //     const { data }: { data: ServerRes } = await (
  //       await axios.get('https://api-int.icloudhospital.com/api/v1/hospitals')
  //     );


  //     console.log(data)
  //     const normalized = normalizeResponse<Hospital>(data.items, hospitalSchema);

  //     // console.log(normalized.result, normalized.entities.hospitals['3'].name);

  //     console.log(normalized)

  //     await updateHospitals(data.items);
  //   })();
  // }, []);

  if (isLoading) {
    console.log(`loading`);
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {hospitals.map(hospital => (
        <li key={hospital.id}>{hospital.name}</li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, dispatchProps)(HospitalList);
