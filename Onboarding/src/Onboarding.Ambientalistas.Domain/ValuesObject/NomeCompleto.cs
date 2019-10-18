using System;
using FluentValidation;

namespace Onboarding.Ambientalistas.Domain.ValuesObject
{
    public class NomeCompleto
    {
        public string _nomeCompleto {get;}
        private NomeCompleto() {}
        internal NomeCompleto(string nomeCompleto) {
            _nomeCompleto = nomeCompleto;
        }

        public static NomeCompleto Parse(string nomeCompleto){
            return new NomeCompleto(nomeCompleto);
        }

        private static void Validar(string nomeCompleto)
        {
            var validador = new ValidarNomeCompleto();
            var validacao = validador.Validate(nomeCompleto);

            if (validacao.IsValid)
            {
                throw new ArgumentException(validacao.Errors.ToString(), nameof(nomeCompleto));
            }
        }            
        
        public static implicit operator string(NomeCompleto nomeCompleto) => nomeCompleto._nomeCompleto;
        public static implicit operator NomeCompleto(string nomeCompleto) => Parse(nomeCompleto);

    }

    public class ValidarNomeCompleto: AbstractValidator<NomeCompleto> {
        public ValidarNomeCompleto() {

            int min = 3;
            int max = 50;

            RuleFor(NomeCompleto => NomeCompleto._nomeCompleto)
                .NotEmpty()
                .NotNull()
                .Length(min, max)
                .WithMessage($"Nome deve ter entre {min} e {max} caracters.");
        }
    } 
}