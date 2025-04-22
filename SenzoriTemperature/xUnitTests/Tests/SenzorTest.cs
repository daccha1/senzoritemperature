using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SenzoriTemperature;
using System.ComponentModel.DataAnnotations;
using SenzoriTemperature.Services;
using SenzoriTemperature.Models;
using SenzoriTemperature.Data;

namespace xUnitTests.Tests
{
    public class SenzorTest
    {
        private readonly ISenzorRepository _repository;
        private readonly SenzorContext _context;

        public SenzorTest()
        {
            _repository = new SQLSenzorRepository();
            _context = new SenzorContext();
        }

        #region AddSensorMethod

        public Senzor sensorObjectId_1 = new Senzor
        {
            id = 1,
            vremeMerenja = DateTime.Now,
            lokacija = "Petrovac",
            poslovniPartner = "Olympic",
            temperatura = 1,
            datumServisa = DateTime.Now
        };

        public Senzor sensorObjectId_99 = new Senzor
        { 
            vremeMerenja = DateTime.Now,
            lokacija = "Petrovac",
            poslovniPartner = "Olympic",
            temperatura = 1,
            datumServisa = DateTime.Now
        };

        public Senzor sensorObjectNull = new Senzor
        {
            vremeMerenja = null,
            lokacija = null,
            poslovniPartner = null,
            temperatura = null,
            datumServisa = null
        };

        [Fact]
        public void AddSensor_InvalidData()
        {
            Senzor s = sensorObjectNull;

            Assert.Throws<ArgumentException>(() => {
                _repository.dodajSenzor(s);
            });

        }

        [Fact]
        public void AddSensor_AlreadyExists()
        {
            Senzor startingSensorObject = sensorObjectId_99;

            _repository.dodajSenzor(startingSensorObject);

            Assert.Throws<InvalidOperationException>( () =>
            {
                _repository.dodajSenzor(startingSensorObject);
            });

        }

        [Fact]
        public void AddSensor_SuccessfullyAdded()
        {
            Senzor sensorToAdd = sensorObjectId_99;

            _repository.dodajSenzor(sensorToAdd);

            Senzor? searchedSensor = _context.Senzori.FirstOrDefault(senzor => senzor.id == sensorToAdd.id);

            Assert.Equal(searchedSensor.id , sensorToAdd.id);

        }

        #endregion

        #region GetAll

        public void GetAll_ReturnsValidList()
        {
            
        }

        public void GetAll_ReturnsInvalidList()
        {

        }

        #endregion

        #region getBad

        public void GetBad_ReturnsValidList()
        {

        }

        public void GetBad_ReturnsValidInTheList()
        {

        }

        public void GetBad_ReturnsInvalid()
        {

        }

        #endregion

        #region getByPartner
        [Fact]
        public void GetByPartner_PartnerDoesNotExist()
        {
            String partnerToSearch = "testString";

            Assert.Throws<ArgumentException>(() =>
            { 
                _repository.getByPartner(partnerToSearch);
            });

        }

        [Fact]
        public void GetByPartner_ReturnsValidList()
        {

        }

        #endregion

        // more test methods to be implemented

    }
}
