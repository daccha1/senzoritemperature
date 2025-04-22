using System.ComponentModel.DataAnnotations;

namespace SenzoriTemperature.Models
{
    public class Senzor
    {

        // Senzor(#Id, Lokacija, VremeMerenja, Temperatura, PoslovniPartner, DatumServisa)
        [Key]
        public int id {  get; set; }
        [Required, StringLength(200)]
        public String? lokacija { get; set; }
        [Required]
        public DateTime? vremeMerenja {  get; set; }
        [Required]
        public double? temperatura { get; set; }
        [Required]
        public String? poslovniPartner { get; set; }
        public DateTime? datumServisa { get; set; }

    }
}
