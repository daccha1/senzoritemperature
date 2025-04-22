using SenzoriTemperature.Models;
using SenzoriTemperature.Data;

namespace SenzoriTemperature.Services
{
    public interface ISenzorRepository
    {
        public List<Senzor> getAll();
        public Senzor getSenzor(int id);
        public List<Senzor> getByPartner(String partner);
        public List<Senzor> getByLocation(String location);
        public List<Senzor> getBad();
        public void dodajSenzor(Senzor s);
        public void obrisiSenzor(int id);
        public List<String> poslovniPartneri();
        
    }

    public class SQLSenzorRepository : ISenzorRepository
    {
        private readonly SenzorContext context;
        public SQLSenzorRepository()
        {
            context = new SenzorContext();
        }

        public void dodajSenzor(Senzor? s)
        {
           
            var senzor = context.Senzori.FirstOrDefault(x => x.id == s.id);

            if(senzor == null)
            {
                if(s == null)
                {
                    throw new ArgumentException("Senzor koji dodajete nije inicijalizovan");
                }

                if (s.id == null || s.poslovniPartner == null ||
                    s.temperatura == null || s.lokacija == null ||
                    s.vremeMerenja == null)
                {
                    throw new ArgumentException("Neki od obaveznih podataka je null");
                }
                else
                {
                    context.Add(s);
                    context.SaveChanges();
                    return;
                }
            }
            else
            {
                throw new InvalidOperationException("Senzor vec postoji");
            }

        }

        public List<Senzor> getAll()
        {
            SenzorContext context = new SenzorContext();
            return context.Senzori.ToList();
        }

        public List<Senzor> getBad()
        {
            SenzorContext context = new SenzorContext();

            List<Senzor>? lista = context.Senzori.ToList();

            if(lista == null)
            {
                throw new Exception("List is not initialized");
            }

            List<Senzor>? losi = new List<Senzor>();

            losi = context.Senzori.Where(senzor => senzor.temperatura > 10).ToList();

            return losi;

        }

        public List<Senzor> getByLocation(string location)
        {
            SenzorContext context = new SenzorContext();

            List<Senzor> listaLokacija = context.Senzori.Where(s => s.lokacija.Contains(location)).ToList();
            return listaLokacija;
        
        }

        public List<Senzor> getByPartner(string partner)
        {
            SenzorContext context = new SenzorContext();

            List<Senzor>? listaLokacija = context.Senzori.Where(s => s.poslovniPartner == partner).ToList();
            // .toList() does not return null, it returns an empty list
            if(listaLokacija.Count == 0)
            {
                throw new ArgumentException();
            }

            return listaLokacija;
        }

        public Senzor getSenzor(int id)
        {
            SenzorContext context = new SenzorContext();
            var senzor = context.Senzori.FirstOrDefault(s => s.id == id);
            if(senzor == null)
            {
                throw new Exception("Greska, ne postoji senzor");
            }
            return senzor;
        }

        public void obrisiSenzor(int id)
        {
            SenzorContext context = new SenzorContext();

            var senzor = context.Senzori.FirstOrDefault(s => s.id == id);

            context.Remove(senzor);
            context.SaveChanges();

        }

        public List<String> poslovniPartneri()
        {
            SenzorContext context = new SenzorContext();

            List<String> lista = new List<String>();

            lista = context.Senzori.Select(s => s.poslovniPartner).Distinct().ToList();

            return lista;
        }
    }


}
