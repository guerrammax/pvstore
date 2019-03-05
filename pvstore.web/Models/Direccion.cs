namespace pvstore.web.Models
{
    public class Direccion
    {
        public int Id { get; set; }
        public string Calle { get; set; }
        public string Provincia { get; set; }
        public int PersonaId { get; set; }
    }
}