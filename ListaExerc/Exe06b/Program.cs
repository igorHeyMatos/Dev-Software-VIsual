
int tamanho = 10;
int[] valores = new int[tamanho];

Random random = new Random();

for (int i = 0; i < valores.Length; i++)
{
    valores[i] = random.Next(10);
    Console.Write(valores[i] + " | ");
}

Array.Sort(valores);

Console.WriteLine("\n");

for (int i = 0; i < valores.Length; i++)
{
    Console.Write(valores[i] + " | ");
}