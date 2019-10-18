using System;
using FluentValidation;
using Onboarding.Framework;

namespace Onboarding.Ambientalistas.Domain.ValuesObject
{
    public class Documento : Value<Documento>
    {
        public string _documento { get; }

        private Documento() { }

        internal Documento(string documento)
        {
            _documento = documento;
        }

        public static Documento Parse(string documento)
        {
            Validar(documento);

            return new Documento(documento);
        }

        private static void Validar(string documento)
        {
            var validador = new ValidarDocumento();
            var validacao = validador.Validate(documento);

            if (validacao.IsValid)
            {
                throw new ArgumentException(validacao.Errors.ToString(), nameof(documento));
            }
        }

        public static implicit operator string(Documento documento) => documento._documento;
        public static implicit operator Documento(string documento) => Parse(documento);
    }

    public class ValidarDocumento: AbstractValidator<Documento> {
        
        public ValidarDocumento() {            
            
            int min = 3;
            int max = 25;

            RuleFor(Documento => Documento._documento)
                .Length(min, max)
                .WithMessage($"Documento deve ter entre {min} e {max} caracters.");

        }
    }
}