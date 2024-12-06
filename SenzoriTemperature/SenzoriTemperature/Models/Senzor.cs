namespace SenzoriTemperature.Models
{
    public class Senzor
    {

        // Senzor(#Id, Lokacija, VremeMerenja, Temperatura, PoslovniPartner, DatumServisa)

        public int id {  get; set; }
        public String lokacija { get; set; }
        public DateTime vremeMerenja {  get; set; }
        public double temperatura { get; set; }
        public String poslovniPartner { get; set; }
        public DateTime datumServisa { get; set; }



    }
}
