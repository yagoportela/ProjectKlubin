using System;
using Onboarding.Framework;

namespace Onboarding.Ambientalistas.Domain.ValuesObject
{
    public class AmbientalistaId : Value<AmbientalistaId>
    {
        public Guid Value { get; }

        public AmbientalistaId(Guid value)
        {
            if (value == default)
                throw new ArgumentException($"Id do Ambientalista deve ser definido.", nameof(value));

            Value = value;
        }

        public override string ToString() => Value.ToString();

        public static implicit operator Guid(AmbientalistaId self) => self.Value;
        public static implicit operator AmbientalistaId(string value) => new AmbientalistaId(Guid.Parse(value));
        public static implicit operator AmbientalistaId(Guid value) => new AmbientalistaId(value);
        
    }
}