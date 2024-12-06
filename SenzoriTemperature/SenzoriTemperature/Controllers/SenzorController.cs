using Microsoft.AspNetCore.Mvc;
using SenzoriTemperature.Models;
using SenzoriTemperature.Services;

namespace SenzoriTemperature.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class SenzorController : ControllerBase
    {
        private ISenzorRepository _senzorRepository;
        public SenzorController(ISenzorRepository senzorRepository)
        {
            _senzorRepository = senzorRepository;
        }


        [HttpGet("all")]
        public List<Senzor> getAll()
        {
            return _senzorRepository.getAll();
        }

        [HttpGet("id")]
        public Senzor getSenzor(int id)
        {
            return _senzorRepository.getSenzor(id);
        }

        [HttpGet("partner/{partner}")]
        public List<Senzor> getByPartner(String partner)
        {
            return _senzorRepository.getByPartner(partner);
        }

        [HttpGet("location/{location}")]
        public List<Senzor> getByLocation(String location)
        {
            return _senzorRepository.getByLocation(location);
        }

        //[HttpGet("poslovniPartneri")]
        [HttpGet("bad")]
        public List<Senzor> getBad()
        {
            return _senzorRepository.getBad();
        }

        //[HttpPut("add")]
        [HttpPost]
        public IActionResult dodajSenzor(Senzor s)
        {
            _senzorRepository.dodajSenzor(s);
            return Ok();
        }

        //[HttpDelete("delete/{id}")]
        [HttpDelete]
        public IActionResult obrisiSenzor(int id)
        {
            _senzorRepository.obrisiSenzor(id);
            return Ok();
        }

        [HttpGet("poslovni-partneri")]
        public List<String> poslovniPartneri()
        {
            return _senzorRepository.poslovniPartneri();
        }

        
    }
}

